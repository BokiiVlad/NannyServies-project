import { calculateAge } from "@/app/utils/calculateAge.js";
import { useState } from "react";
import ReviewsList from "../ReviewsList/ReviewsList.jsx";
import AppointmentForm from "../AppointmentForm/AppointmentForm.jsx";

const NannyCard = ({
  avatar_url,
  location,
  name,
  price_per_hour,
  rating,
  experience,
  education,
  kids_age,
  about,
  characters,
  birthday,
  reviews,
  id,
}) => {
  const [showReviews, setShowReviews] = useState(false);
  const [appointmentModal, setAppointmentModal] = useState(false);

  const stringCharacters = characters
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join(", ");

  const age = calculateAge(birthday);

  return (
    <div className="flex gap-6">
      {appointmentModal && (
        <AppointmentForm
          onClose={() => setAppointmentModal(!appointmentModal)}
          imageUrl={avatar_url}
          nannyName={name}
          nannyId={id}
        />
      )}
      <div className="relative border-2 border-[rgba(240,63,59,0.2)] rounded-[30px] w-[120px] h-[120px] p-3 flex-shrink-0">
        <img
          className="rounded-[15px] w-full h-full object-cover w-[96px] h-[96px]"
          src={avatar_url}
          alt={name}
        />
        <svg
          className="absolute top-[9px] right-[14px]"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="#FBFBFB" />
          <circle cx="6.99967" cy="7.0001" r="4.66667" fill="#38CD3E" />
        </svg>
      </div>

      <ul className="flex flex-col justify-between w-full gap-2">
        <li className="flex justify-between items-start w-full mb-4">
          <div>
            <p className="font-medium text-[16px] leading-[150%] text-[#8a8a89]">
              Nanny
            </p>
            <h3 className="font-medium text-[24px] leading-[100%] text-[#11101c]">
              {name}
            </h3>
          </div>

          <ul className="flex items-center gap-4 mr-[98px]">
            <li className="flex gap-2 items-center">
              <svg
                className="stroke-[#11101c] stroke-[1.5] fill-[#FBFBFB]"
                width="16"
                height="16"
              >
                <use href="/icons/sprite.svg#icon-map"></use>
              </svg>
              <p className="font-medium text-[16px] text-[#11101c]">
                {location}
              </p>
            </li>

            <li>
              <svg width="1" height="16" fill="none">
                <path d="M0.5 0V16" stroke="#11101C" strokeOpacity="0.2" />
              </svg>
            </li>

            <li className="flex gap-2 items-center">
              <svg
                className="stroke-[#FFC531] stroke-[1.5] fill-[#FFC531]"
                width="16"
                height="16"
              >
                <use href="/icons/sprite.svg#icon-star"></use>
              </svg>
              <p className="font-medium text-[16px] text-[#11101c]">
                Rating: {rating}
              </p>
            </li>

            <li>
              <svg width="1" height="16" fill="none">
                <path d="M0.5 0V16" stroke="#11101C" strokeOpacity="0.2" />
              </svg>
            </li>

            <li className="font-medium text-[16px] text-[#11101c]">
              <p>
                Price / 1 hour:{" "}
                <span className="text-[#38CD3E]">{price_per_hour}$</span>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <ul className="flex gap-3 flex-wrap">
            <li className="rounded-[24px] px-4 py-2 bg-[#f3f3f3] font-medium text-[16px] leading-[150%] text-[rgba(17,16,28,0.5)]">
              <p>
                Age:{" "}
                <span className="text-[#11101c] underline decoration-skip-ink-none">
                  {age}
                </span>
              </p>
            </li>
            <li className="rounded-[24px] px-4 py-2 bg-[#f3f3f3] font-medium text-[16px] leading-[150%] text-[rgba(17,16,28,0.5)]">
              <p>
                Experience:{" "}
                <span className="text-[#11101c]  decoration-skip-ink-none">
                  {experience}
                </span>
              </p>
            </li>
            <li className="rounded-[24px] px-4 py-2 bg-[#f3f3f3] font-medium text-[16px] leading-[150%] text-[rgba(17,16,28,0.5)]">
              <p>
                Kids Age:{" "}
                <span className="text-[#11101c]  decoration-skip-ink-none">
                  {kids_age}
                </span>
              </p>
            </li>
            <li className="rounded-[24px] px-4 py-2 bg-[#f3f3f3] font-medium text-[16px] leading-[150%] text-[rgba(17,16,28,0.5)]">
              <p>
                Characters:{" "}
                <span className="text-[#11101c] decoration-skip-ink-none">
                  {stringCharacters}
                </span>
              </p>
            </li>
            <li className="rounded-[24px] px-4 py-2 bg-[#f3f3f3] font-medium text-[16px] leading-[150%] text-[rgba(17,16,28,0.5)]">
              <p>
                Education:{" "}
                <span className="text-[#11101c] decoration-skip-ink-none">
                  {education}
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p className="font-normal text-[16px] leading-[125%] text-[rgba(17,16,28,0.5)] mt-4 mb-[6px]">
            {about}
          </p>
        </li>
        <li>{showReviews && <ReviewsList reviews={reviews} />}</li>
        <li>
          {showReviews ? (
            <button
              className="mt-10 rounded-[30px] px-7 py-[14px] w-[215px] h-12 bg-[#103931] font-medium text-[16px] leading-[125%] tracking-[-0.01em] text-[#fbfbfb]"
              onClick={() => setAppointmentModal(true)}
            >
              Make an appointment
            </button>
          ) : (
            <button
              onClick={() => setShowReviews((prev) => !prev)}
              className=" font-medium text-[16px] leading-[150%] underline decoration-skip-ink-none text-[#11101c]"
            >
              Read more
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NannyCard;
