import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Modal from "react-modal";
import { getProfile, updateProfile } from "../../redux/actions/profile";
import { Header, ProfileSidebar } from "../../components/";
import Path from "../../components/path/path";
import "./profile.css";

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    birthDate: { day: "", month: "", year: "" },
    phone: "",
  });

  const [modalMessege, setModalMessege] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getProfile());
    } else {
      console.error("No token found, authorization required");
    }
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  if (!profile) {
    return <div>Загрузка...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["day", "month", "year"].includes(name)) {
      setFormData({
        ...formData,
        birthDate: { ...formData.birthDate, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      setModalMessege("Ваши данные успешно сохранены");
      setModalOpen(true);
    } else {
      setModalMessege("Ошибка, попробуйте ещё раз");
      setModalOpen(true);
      return;
    }
    dispatch(updateProfile(formData));
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const years = [];
  for (let i = 2024; i >= 1970; i--) {
    years.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <Helmet>
        <title>Профиль</title>
        <body className="page-profile"></body>
      </Helmet>
      <Header />
      <div className="main-profile">
        <ProfileSidebar />
        <div className="profile-info">
          <h3>Профиль</h3>
          <form className="contact-info" onSubmit={handleSubmit}>
            <div className="info-cart">
              <p>Имя</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="info-cart">
              <p>Фамилия</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="info-cart">
              <p>Отчество</p>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="gender">
              <p>Пол</p>
              <div className="selection-gender">
                <p>
                  <input
                    name="gender"
                    value="male"
                    type="radio"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />{" "}
                  Мужской
                </p>
                <p>
                  <input
                    name="gender"
                    value="female"
                    type="radio"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />{" "}
                  Женский
                </p>
              </div>
            </div>
            <div className="Date">
              <p>Укажите дату рождения</p>
              <div className="Date-birth">
                <select
                  name="day"
                  value={formData.birthDate.day}
                  onChange={handleChange}
                >
                  <option key="placeholder" value="" disabled>
                    День
                  </option>
                  {days}
                </select>
                <select
                  name="month"
                  value={formData.birthDate.month}
                  onChange={handleChange}
                >
                  <option key="placeholder" value="" disabled>
                    Месяц
                  </option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.birthDate.year}
                  onChange={handleChange}
                >
                  <option key="placeholder" value="" disabled>
                    Год
                  </option>
                  {years}
                </select>
              </div>
            </div>
            <button className="save-info" type="submit">
              Сохранить
            </button>
          </form>
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Success"
            className="modalWindow"
            overlayClassName="overlayModal"
          >
            <Path />
            <p>{modalMessege}</p>
            <button onClick={closeModal}>Закрыть</button>
          </Modal>
        </div>
        <div className="mail">
          <div>
            <p>Мобильный телефон</p>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
