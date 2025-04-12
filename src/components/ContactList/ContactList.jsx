import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log("Filtered contacts:", filteredContacts);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => {
        console.log("Contact item:", contact);
        const { id, name, phone, number } = contact;
        const phoneNumber = phone || number || "";

        return (
          <li key={id} className={styles.item}>
            <Contact
              name={name}
              number={phoneNumber}
              onDelete={() => handleDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
