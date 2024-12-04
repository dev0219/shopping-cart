
const index = ({ modalHeader, handleModal, Confirmed, isDeleteModal }: any) => {
  return (
    <div className="modal">
      <div className="modal-content deleting-modal">
        <div className="close" onClick={() => handleModal()}>&times;</div>
        <div className='modal-header-title'>
          {modalHeader}
        </div>
        <div className="modal-actions">
          <button type='button' className='update-action' onClick={() => Confirmed()}>{isDeleteModal?'Delete':'Yes'}</button>
          <button type='button' className='cancel-action' onClick={() => handleModal()}>{isDeleteModal?'Cancel':'No'}</button>
        </div>
      </div>
    </div>
  );
};

export default index;
