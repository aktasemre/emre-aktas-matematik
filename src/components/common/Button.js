'use client';
import Link from 'next/link';
import styles from '../../styles/Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonClasses} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 