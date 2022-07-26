import ModalComponent from './UI/ModalComponent';
import styles from './CountryDetails.module.css';
import { ICountryItem } from './Countries';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const CountryDetails: React.FC<ICountryItem> = ({ country: data, onClose }) => {
  return (
    <ModalComponent onHide={onClose}>
      <div className={styles['button--alt']} onClick={onClose}>
        <CloseIcon />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5'>Details of {data.name.common}</Typography>
        <img src={data.flags.png} alt='' />
      </div>
    </ModalComponent>
  );
};

export default CountryDetails;
