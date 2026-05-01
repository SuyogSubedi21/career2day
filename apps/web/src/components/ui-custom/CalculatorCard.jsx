
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CalculatorCard = ({ icon: Icon, title, description, link = "/tools", index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-effect rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow group"
    >
      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
          <Link to={link} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            {title}
            <span className="absolute inset-0"></span>
          </Link>
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default CalculatorCard;
