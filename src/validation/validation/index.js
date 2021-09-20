const validate = (values) => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Name Required';
  }

  if (!values.last_name) {
    errors.last_name = 'Name Required';
  }

  if (!values.id_number) {
    errors.id_number = 'ID Number Required';
  } else if (values.id_number && !/(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/.test(values.id_number)) {
    errors.id_number = 'Invalid ID number';
  }


  // if (!values.phone) {
  //   errors.phone = 'Mobile Number Required';
  // } else if (values.phone && !/^(\+27|0)[6-8][0-9]{8}$/.test(values.phone)) {
  //   errors.phone = 'Invalid mobile number';
  // }

  // if (values.email && !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
  //   errors.email = 'Email is not valid';
  // }

  if (!values.voting_station) {
    errors.voting_station = 'Voting Station is Required';
  }

  // if (!values.surburb) {
  //   errors.surburb = 'Surbub is Required';
  // }

  // if (!values.ward) {
  //   errors.ward = 'Ward is Required';
  // }

  // if (!values.address) {
  //   errors.address = 'Address Required';
  // }


  // if (!values.province) {
  //   errors.province = 'Province Required';
  // }

  return errors;
};

export default validate;
