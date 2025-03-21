import React from 'react';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Alert = ({
    variant = 'default',
    children,
    className = '',
    onClose,
    showIcon = true
}) => {
    const variants = {
        default: {
            containerClass: 'bg-gray-100 border-gray-200 text-gray-800',
            icon: <FaInfoCircle className="w-5 h-5" />
        },
        success: {
            containerClass: 'bg-green-50 border-green-200 text-green-800',
            icon: <FaCheckCircle className="w-5 h-5" />
        },
        warning: {
            containerClass: 'bg-yellow-50 border-yellow-200 text-yellow-800',
            icon: <FaExclamationTriangle className="w-5 h-5" />
        },
        destructive: {
            containerClass: 'bg-red-50 border-red-200 text-red-800',
            icon: <FaTimesCircle className="w-5 h-5" />
        },
        primary: {
            containerClass: 'bg-blue-50 border-blue-200 text-blue-800',
            icon: <FaInfoCircle className="w-5 h-5" />
        }
    };

    const currentVariant = variants[variant] || variants.default;

    return (
        <div className={`
      relative flex items-center gap-3 p-4 rounded-lg border
      transition-all duration-300 animate-fadeIn
      ${currentVariant.containerClass}
      ${className}
    `}>
            {showIcon && currentVariant.icon}
            <div className="flex-1">{children}</div>
            {onClose && (
                <button
                    onClick={onClose}
                    className={`
            p-1 rounded-full hover:bg-black/10
            transition-all duration-200
          `}
                >
                    <IoClose className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default Alert;