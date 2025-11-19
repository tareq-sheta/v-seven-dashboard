import { useState, useRef, useEffect } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredList, setIsHoveredList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [list, setList] = useState({});
  const handleMouseEnterList = () => {
    setIsHoveredList(true);
  };
  const handleMouseLeaveList = () => {
    setIsHoveredList(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const ref1 = useRef(null);
  //   const ref2 = useRef(null);

  //   let list;
  useEffect(() => {
    if (isModalOpen) {
      document
        .querySelector(".ant-select-item")
        .addEventListener("mouseenter", handleMouseEnterList);
      document
        .querySelector(".ant-select-item")
        .addEventListener("mouseleave", handleMouseLeaveList);
    }
    const node = ref1.current.nativeElement;

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    // ------

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (isModalOpen) {
        document
          .querySelector(".ant-select-item")
          .removeEventListener("mouseenter", handleMouseEnterList);
        document
          .querySelector(".ant-select-item")
          .removeEventListener("mouseleave", handleMouseLeaveList);
      }
    };
  }, []);

  return [
    ref1,
    isHovered,
    isHoveredList,
    isModalOpen,
    handleMouseEnterList,
    handleMouseLeaveList,
    handleModalOpen,
    handleModalClose,
  ];
};

export default useHover;
