  export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

export const validateAvatar = (file) => {
    if (!file) return "";
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.include(file.type)) {
        return "Avatar must be a JPG or PNG file "
    }
    const maxSize = 5 * 1024;
    if (file.size > maxSize) {
        return "Avatar must be lees than 5MB ";
    }

    return "";
  };

  