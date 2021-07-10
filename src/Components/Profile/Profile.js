import React from 'react';
import { Typography } from '@material-ui/core';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import { TimelineContent, TimelineItem } from '@material-ui/lab';
import './Profile.css';
import resumeData from '../utils/resumeData';
import profileImg from '../../Assets/Img/profile_img.jpg';
import PersonIcon from '@material-ui/icons/Person';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className={'timeline_content'}>
      {link ? (
        <Typography className={'timelineItem_text'}>
          <span>{title}:</span>{' '}
          <a href={link} target='_blank'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className={'timelineItem_text'}>
          <span>{title}</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={profileImg} alt='My profile pic' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title={'Name:'} text={resumeData.name} />
          <CustomTimelineItem title={'Job:'} text={resumeData.job} />
          <CustomTimelineItem title={'Email:'} text={resumeData.email} />
          <CustomTimelineItem title={'Phone:'} text={resumeData.phone} />
          <CustomTimelineItem title={'Location:'} text={resumeData.location} />
          <CustomTimelineItem
            title={'Languages:'}
            text={resumeData.languages}
          />
          {/* {Object.keys(resumeData.social).map((key, index) => (
            <CustomTimelineItem
              key={index}
              title={key}
              text={resumeData.social[key].text}
              link={resumeData.social[key].link}
            />
          ))} */}
        </CustomTimeline>
        {/* <div className='button_container'>
          <CustomButton text={'Download Cv'} icon={<GetAppIcon />} />
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
