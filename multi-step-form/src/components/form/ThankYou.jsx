import thankYouIcon from '../../assets/icons/icon-thank-you.svg';
import '../../styles/ThankYou.css';

function ThankYou() {
  return (
    <div className="thank-you">
      <img
        src={thankYouIcon}
        alt="Thank you"
      />

      <h1 className="thank-you-title">
        Thank you!
      </h1>

      <p className="thank-you-description">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default ThankYou