import { useState } from "react";
import Modal from "./Modal";

export default function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleSubmitBtn(e) {
    e.preventDefault();

    setErrorMessage(null);
    if (loanInputs.age < 18 || loanInputs.age > 100) {
      setErrorMessage("Age is not allowed");
    } else if (
      loanInputs.phoneNumber.length < 10 ||
      loanInputs.phoneNumber.length > 12
    ) {
      setErrorMessage("Phone Number Format is Incoorect");
    }
    setShowModal(true);
  }

  const [showModal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.phoneNumber == "" ||
    loanInputs.age == "";

  return (
    <div
      className="flex justify-center items-center"
      onClick={() => {
        if (showModal) setShowModal(false);
      }}
    >
      <form className="flex flex-col justify-center items-center bg-blue-950 text-white w-[90%] lg:w-[50%] m-[3rem] lg:m-[5.5rem] p-6 rounded-xl shadow-[0px_10px_10px_rgba(0,0,0,0.5)]">
        <h1 className="font-bold text-2xl lg:text-3xl">Requesting a Loan</h1>
        <hr className="text-white w-full m-5" />

        <label>Name:</label>
        <input
          type="text"
          className="w-full h-8 bg-white rounded-sm text-zinc-900 px-1.5"
          value={loanInputs.name}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, name: e.target.value })
          }
        />

        <label className="mt-3">Phone Number:</label>
        <input
          type="tel"
          className="w-full h-8 bg-white rounded-sm text-zinc-900 px-1.5"
          value={loanInputs.phoneNumber}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, phoneNumber: e.target.value })
          }
        />

        <label className="mt-3">Age:</label>
        <input
          type="number"
          className="w-full h-8 bg-white rounded-sm text-zinc-900 px-1.5"
          value={loanInputs.age}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, age: e.target.value })
          }
        />

        <label className="mt-3">Are you an employee?</label>
        <input
          type="checkbox"
          className="w-full h-8 bg-white rounded-sm"
          checked={loanInputs.isEmployee}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, isEmployee: e.target.checked })
          }
        />

        <label className="mt-3">Salary</label>
        <select
          className="w-full h-8 bg-white rounded-sm text-zinc-900 px-1.5"
          value={loanInputs.salaryRange}
          onChange={(e) =>
            setLoanInputs({ ...loanInputs, salaryRange: e.target.value })
          }
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={
            btnIsDisabled
              ? "mt-3 text-xl p-2.5 rounded-md bg-gray-500"
              : "mt-3 text-xl p-2.5 rounded-md bg-fuchsia-600 cursor-pointer"
          }
          onClick={handleSubmitBtn}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}
