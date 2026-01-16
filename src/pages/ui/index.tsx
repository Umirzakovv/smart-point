import { Button } from 'antd';
import { useDisclosure } from 'shared/lib';
import { BookModal } from 'shared/ui/book-modal';

const UIPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button type="primary" onClick={onOpen}>
        button
      </Button>
      <BookModal
        productTitle="Xiaomi Smart Air Purifier 4 Pro"
        productPrice={149}
        isOpen={isOpen}
        handleCancel={onClose}
        handleOk={onOpen}
      />
    </>
  );
};

export default UIPage;
