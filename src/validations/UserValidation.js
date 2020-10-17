const UserValidation = (values) => {
  const errors = {};

  if (!values.namaLengkap || values.namaLengkap === "") {
    errors.namaLengkap = "Nama harus diisi";
  }

  if (!values.posisi || values.posisi === "") {
    errors.posisi = "Posisi harus diisi";
  }

  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }

  if (!values.nohp || values.nohp === "") {
    errors.nohp = "No HP harus diisi";
  }

  return errors
};

export default UserValidation;
