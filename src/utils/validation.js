export const validateName = ({ name }) => {
  const pattern = /^[a-zA-Z]+$/;
  if ((name && name.trim().length === 0) || !pattern.test(name)) {
    return false;
  }
  return true;
};

export const validateEmail = ({ email }) => {
  const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  if ((email && email.trim().length === 0) || !pattern.test(email)) {
    return false;
  }
  return true;
};

export const validatePhoneNo = ({ phoneNo }) => {
  const pattern = /^[0-9]{10}$/;
  if ((phoneNo && phoneNo.trim().length === 0) || !pattern.test(phoneNo)) {
    return false;
  }
  return true;
};

export const validatePrvOrgDate = (curDate, prvDate) => {
  return curDate === prvDate;
};
