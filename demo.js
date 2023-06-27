import React from 'react';
import './index.css';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag, theme } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { useEffect, useRef, useState } from 'react';
import { RiFilter2Line } from 'react-icons/ri';

const TagAdder = ({ filterValue, TagerVisible, onTagClick }) => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState([]);
  const [tagVisible, setTagVisible] = useState();

  useEffect(() => {
    if (TagerVisible) {
      setTagVisible(TagerVisible);
    } else if (!TagerVisible) {
      setTagVisible(TagerVisible);
      tagAdd(filterValue);
    }
  }, [TagerVisible]);
  const handleClose = (removedTag) => {
    const newTags = filterValue.splice(0, 3);
    setTags(newTags);
    setTagVisible(!TagerVisible);
  };

  const forMap = () => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(filterValue);
        }}
      >
        {filterValue}
      </Tag>
    );
    return (
      <span
        key={filterValue}
        style={{
          display: 'inline-block',
        }}
      >
        {tagElem}
      </span>
    );
  };

  const tagChild = forMap();

  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };
  const handleTagClick = () => {
    onTagClick(true);
  };
  const tagAdd = () => {
    const filterTag = filterValue.join();
    setTags();
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      {tagVisible === false ? (
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              e.target.style = 'display: inline-block';
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200,
          }}
          appear={false}
        >
          <RiFilter2Line onClick={handleTagClick} />
          {tagChild}
        </TweenOneGroup>
      ) : (
        <Tag onClick={handleTagClick} style={tagPlusStyle}>
          필터 추가
          <PlusOutlined />
        </Tag>
      )}
    </>
  );
};
export default TagAdder;
