const ReviewsList = ({ reviews }) => {
  return (
    <ul className="flex flex-col gap-[25px]">
      {reviews.map((el, index) => {
        const firstLetter = el.reviewer[0];

        return (
          <li className="" key={index}>
            <div className="flex gap-3 mb-4">
              <button className=" w-11 h-11 rounded-full bg-[rgba(16,57,49,0.2)] flex items-center justify-center">
                <p className="font-medium text-[20px] leading-[100%] text-[#103931]">
                  {firstLetter}
                </p>
              </button>

              <div>
                <p className="font-medium text-base leading-[125%] text-[#11101c] mb-1">
                  {el.reviewer}
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="stroke-[#FFC531] stroke-[1.5] fill-[#FFC531]"
                    width="16"
                    height="16"
                  >
                    <use href="/icons/sprite.svg#icon-star"></use>
                  </svg>
                  <p className="font-medium text-[14px] leading-[129%] text-[#11101c]">
                    {el.rating}
                  </p>
                </div>
              </div>
            </div>

            <p className="font-normal text-[16px] leading-[125%] text-[rgba(17,16,28,0.5)]">
              {el.comment}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
