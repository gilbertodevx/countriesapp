import Modal from './UI/Modal';
import styles from './CountryDetails.module.css';

const CountryDetails = ({ name, onClose }: any) => {
  return (
    <Modal onHide={onClose}>
      {' '}
      <button className={styles['button--alt']} onClick={onClose}>
        Close
      </button>
      Details of {name}
    </Modal>
  );
};

export default CountryDetails;
