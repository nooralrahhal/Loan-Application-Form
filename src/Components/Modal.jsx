export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className="absolute bg-[rgba(0,0,0,0.5)] w-[90%] lg:w-[55vw] h-[60vh] lg:h-[105vh] flex justify-center items-center text-lg lg:text-2xl font-bold">
        <h1
          className={
            errorMessage
              ? "bg-red-50 text-red-600 px-15 lg:px-32 py-2 lg:py-3.5"
              : "bg-green-50 text-green-600 px-15 lg:px-32 py-2 lg:py-3.5"
          }
        >
          {errorMessage != null
            ? errorMessage
            : "The Form Has Been Submitted Successfully"}
        </h1>
      </div>
    );
  } else {
    return <></>;
  }
}
