
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validatePassword = (password) => {
  if (!password || password.length < 8) {
    return { 
      isValid: false, 
      error: 'Password must be at least 8 characters' 
    };
  }
  return { isValid: true, error: null };
};

export const validateResumeData = (data) => {
  const errors = {};

  if (!validateRequired(data.name)) {
    errors.name = 'Full name is required';
  }

  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
