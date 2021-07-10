import React from 'react';

import {
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  Timeline,
} from '@material-ui/lab';
import './Timeline.css';
import { Typography } from '@material-ui/core';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={'timeline'}>
      <TimelineItem className={'timeline_firstItem'}>
        {/* Item Header */}
        <TimelineSeparator>
          <TimelineDot className={'timeline_dot_header'}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className={'timeline_header'}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={'separator_padding'}>
    <TimelineDot variant={'outlined'} className={'timeline_dot'} />
    <TimelineConnector />
  </TimelineSeparator>
);
export default CustomTimeline;
