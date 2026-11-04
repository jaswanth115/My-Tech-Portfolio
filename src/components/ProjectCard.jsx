import React, { useCallback, useRef, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import DetailFlipModal from './DetailFlipModal';

const ProjectCard = ({ item, isLargeRow, expandable }) => {
    const [open, setOpen] = useState(false);
    const pointerStart = useRef(null);
    const IconComponent = item.icon;
    const handleClose = useCallback(() => setOpen(false), []);

    const CardContent = (
        <>
            {IconComponent ? (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: item.iconBg || 'linear-gradient(160deg, #2a2a2a, #111)'
                    }}
                >
                    <IconComponent
                        size={isLargeRow ? 56 : 42}
                        color={item.iconColor || '#fff'}
                        strokeWidth={1.7}
                    />
                </div>
            ) : (
                <img 
                    src={item.img} 
                    alt={item.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8
                    }} 
                />
            )}

            {expandable && (
                <div className="detail-hint" aria-hidden="true">
                    <Maximize2 size={12} />
                </div>
            )}
            
            <div 
                className="info"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '10px',
                    background: 'linear-gradient(to top, #141414 10%, transparent)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
            >
                <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#ccc' }}>{item.subtitle}</p>
                <p style={{ fontSize: '0.65rem', color: '#aaa', marginTop: '4px', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '5px' }}>
                    {item.tech && item.tech.slice(0, 3).map(t => (
                        <span key={t} style={{ fontSize: '0.55rem', border: '1px solid #666', padding: '1px 3px', borderRadius: '2px' }}>{t}</span>
                    ))}
                </div>
            </div>
        </>
    );

    const cardStyles = {
        minWidth: isLargeRow ? 'clamp(160px, 40vw, 200px)' : 'clamp(220px, 60vw, 260px)',
        height: isLargeRow ? 'clamp(220px, 50vw, 280px)' : 'clamp(130px, 30vw, 150px)',
        marginRight: '15px',
        borderRadius: '8px',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#222',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit'
    };

    const className = `poster${isLargeRow ? ' posterLarge' : ''}${open ? ' is-open' : ''}`;

    const wasDrag = (event) => {
        const start = pointerStart.current;
        if (!start) return false;
        return Math.abs(event.clientX - start.x) > 10 || Math.abs(event.clientY - start.y) > 10;
    };

    const handlePointerDown = (event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY };
    };

    const handleOpen = (event) => {
        if (!expandable) return;
        if (wasDrag(event)) return;
        event.preventDefault();
        setOpen(true);
    };

    const handleKeyDown = (event) => {
        if (!expandable) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen(true);
        }
    };

    if (item.link) {
        return (
            <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={className}
                style={cardStyles}
            >
                {CardContent}
            </a>
        );
    }

    return (
        <>
            <div
                className={className}
                style={cardStyles}
                role={expandable ? 'button' : undefined}
                tabIndex={expandable ? 0 : undefined}
                aria-label={expandable ? `View details for ${item.title}` : undefined}
                onPointerDown={expandable ? handlePointerDown : undefined}
                onClick={expandable ? handleOpen : undefined}
                onKeyDown={expandable ? handleKeyDown : undefined}
            >
                {CardContent}
            </div>
            {open && (
                <DetailFlipModal item={item} onClose={handleClose} />
            )}
        </>
    );
};

export default ProjectCard;
