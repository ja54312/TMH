"use client";
import React, { useState, useEffect, useRef } from 'react';
//styles
import styles from '../../StatsHome.module.sass'
//types
interface GrowNumberProps {
    numberStart: number;
    numberEnd: number;
}

export const GrowNumber: React.FC<GrowNumberProps> = ({ numberStart, numberEnd }) => {
    const [number, setNumber] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Ajusta el umbral según sea necesario
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 5000; // Duración en milisegundos
        const incrementTime = 20; // Intervalo de tiempo en milisegundos
        const step = (numberEnd - numberStart) / (duration / incrementTime);

        const interval = setInterval(() => {
            numberStart += step;
            if (numberStart >= numberEnd) {
                numberStart = numberEnd;
                clearInterval(interval);
            }
            setNumber(Math.round(numberStart));
        }, incrementTime);

        return () => clearInterval(interval);
    }, [isVisible]);

    const formattedNumber = number.toLocaleString();

    return (
        <div ref={sectionRef} className={styles.stats}>
            <span>+{formattedNumber}</span>
        </div>
    );
}