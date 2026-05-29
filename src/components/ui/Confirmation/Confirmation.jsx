import Button from "../Button";

const Confirmation = ({ children, approve, reject, onApprove, onReject }) => {
  return (
    <div>
      <p className="text-confirmation-medium mb-3">{children}</p>
      <div className="d-flex align-items-center justify-content-end">
        <Button type="Cancel" onClick={onReject}>
          {reject}
        </Button>
        <Button type="Submit" onClick={onApprove}>
          {approve}
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
