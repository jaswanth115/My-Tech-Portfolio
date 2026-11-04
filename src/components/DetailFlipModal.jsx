import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './DetailFlipModal.css';

const CLOSE_MS = 280;

const DetailFlipModal = ({ item, onClose }) => {
    const [visible, setVisible] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const closingRef = useRef(false);
    const onCloseRef = useRef(onClose);
    const IconComponent = item.icon;

    onCloseRef.current = onClose;

    const handleClose = useCallback(() => {
        if (closingRef.current) return;
        closingRef.current = true;
        setVisible(false);
        window.setTimeout(() => onCloseRef.current(), CLOSE_MS);
    }, []);

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const previousOverflow = document.body.style.overflow;
        const previousPadding = document.body.style.paddingRight;
        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let showFrame2 = 0;
        const showFrame1 = requestAnimationFrame(() => {
            showFrame2 = requestAnimationFrame(() => setVisible(true));
        });
        const flipTimer = window.setTimeout(() => setFlipped(true), reduceMotion ? 0 : 90);

        const onKeyDown = (event) => {
            if (event.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            cancelAnimationFrame(showFrame1);
            cancelAnimationFrame(showFrame2);
            clearTimeout(flipTimer);
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPadding;
        };
    }, [handleClose]);

    return createPortal(
        <div
            className={`detail-overlay${visible ? ' is-visible' : ''}${closingRef.current ? ' is-closing' : ''}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-card-title"
        >
            <div className="flip-scene" onClick={(event) => event.stopPropagation()}>
                <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
                    <div className="flip-face flip-front" aria-hidden={flipped}>
                        {IconComponent ? (
                            <div className="flip-front-fallback">
                                <IconComponent size={72} color="white" strokeWidth={1.5} />
                            </div>
                        ) : (
                            <img src={item.img} alt="" />
                        )}
                    </div>

                    <div className="flip-face flip-back">
                        <button
                            type="button"
                            className="detail-close"
                            onClick={handleClose}
                            aria-label="Close details"
                        >
                            <X size={18} />
                        </button>

                        <div className="flip-back-scroll">
                            <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                {item.img && (
                                    <img className="detail-thumb" src={item.img} alt="" />
                                )}
                                <div>
                                    <h3 id="detail-card-title" className="detail-title">{item.title}</h3>
                                    {item.subtitle && (
                                        <p className="detail-subtitle">{item.subtitle}</p>
                                    )}
                                </div>
                            </div>

                            {item.highlights && item.highlights.length > 0 ? (
                                <ul className="detail-highlights">
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            ) : (
                                item.description && (
                                    <p className="detail-description">{item.description}</p>
                                )
                            )}

                            {item.tech && item.tech.length > 0 && (
                                <div className="detail-tags">
                                    {item.tech.map((tag) => (
                                        <span key={tag} className="detail-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DetailFlipModal;
