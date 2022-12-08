import { useState } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppStore } from "../../app/store";
import { PublicRoutes } from "../../models/routes";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const { userName } = useSelector((store: AppStore) => store.auth);

  setInterval(() => {
    setCountdown(countdown - 1);
    if (countdown <= 0) {
      navigate(`/${PublicRoutes.HOME}`, { replace: true });
      setCountdown(10);
      window.location.reload();
    }
  }, 1000);

  return (
    <div className="flex flex-col font-poppins justify-center items-center h-screen">
      <div className="text-2xl font-bold">Felicitaciones {userName},</div>
      <span>tu compra se realizo con exito!!!</span>
      <MdCelebration className="h-32 w-32 m-4" />
      <Link
        to="/"
        className="text-center cart-buttons bg-[#07A889] text-[#FFFFFF] font-bold"
      >
        VOLVIENDO A MOVEment ({countdown})
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
