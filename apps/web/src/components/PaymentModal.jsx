
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentModal = ({ isOpen, onClose, onUpgrade }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpgrade = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      onUpgrade();
      setIsProcessing(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 no-print"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 no-print"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Upgrade to Premium</h2>
                    <p className="text-sm text-gray-600">Unlock all professional templates</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Access to 12 premium templates</p>
                    <p className="text-sm text-gray-600">Modern, minimal, corporate, creative, and executive designs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Unlimited PDF downloads</p>
                    <p className="text-sm text-gray-600">Download your resume as many times as you need</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Professional typography and layouts</p>
                    <p className="text-sm text-gray-600">Stand out with unique, ATS-friendly designs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Lifetime access</p>
                    <p className="text-sm text-gray-600">One-time payment, use forever</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleUpgrade}
                  disabled={isProcessing}
                  className="w-full h-12 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.98]"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Unlock Premium Templates
                    </span>
                  )}
                </Button>
                <p className="text-xs text-center text-gray-500">
                  Demo mode: Click to simulate premium unlock
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
