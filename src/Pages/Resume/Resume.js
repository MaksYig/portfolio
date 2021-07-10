import React, { useState } from 'react';
import './Resume.css';
import {
  Grid,
  Typography,
  Icon,
  Paper,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import CustomTimeline, {
  CustomTimelineSeparator,
} from '../../Components/Timeline/Timeline';
import { TimelineContent, TimelineItem, TimelineDot } from '@material-ui/lab';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import resumeData from '../../Components/utils/resumeData';
import 'react-image-gallery/styles/css/image-gallery.css';

const Resume = () => {
  const [diplomDialog, setDiplomDialog] = useState(false);

  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Skils */}
      <Grid container className='section garybg pb_45 p_50'>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className={'skill_title'}>
                    {skill.title}
                  </Typography>
                  {skill.description.map((el, index) => (
                    <Typography
                      variant='body2'
                      className='skill_description'
                      key={index}
                    >
                      <TimelineDot
                        variant='outlined'
                        className='timeline_dot'
                      />
                      {el}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Education and Expirience */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Education' icon={<SchoolIcon />}>
                {resumeData.educations.map((education, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className='resume_content'>
                      <Typography className='timeline_title'>
                        {education.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {education.date}
                      </Typography>
                      <Typography variant='body2' className='timeline_desc'>
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Expiriences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                {resumeData.experiences.map((exp, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className='resume_content'>
                      <Typography className='timeline_title'>
                        {exp.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {exp.date}
                      </Typography>
                      <Typography variant='body2' className='timeline_desc'>
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className='section garybg pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='space-around' spacing={3}>
            {resumeData.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon} </Icon>
                  <Typography className='service_title' variant='h6'>
                    {service.title}
                  </Typography>
                  <Typography className='service_description' variant='body2'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Diploms */}
      <Grid container className='section  pt_45 pb_45'>
        <Grid item className='section_title mb_30 '>
          <span></span>
          <h6 className='section_title_text'>My Diplomas</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.diploms.map((diplom, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={0} className='diplom'>
                  <img
                    src={diplom.img}
                    className='diplom_img'
                    onClick={() => setDiplomDialog(diplom)}
                  />
                  <Typography variant='h6' className={'diplom_title'}>
                    {diplom.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Dialog
          open={Boolean(diplomDialog)}
          onClose={() => setDiplomDialog(false)}
          className='diplomDialog'
          // maxWidth={'md'}
          fullWidth
        >
          <DialogTitle onClose={() => setDiplomDialog(false)}>
            <Typography variant='body2' className='diplomDialog_title'>
              {diplomDialog.title}
            </Typography>
          </DialogTitle>
          <img
            src={diplomDialog.img}
            alt={diplomDialog.title}
            className='diplomDialog_image'
          />
        </Dialog>
      </Grid>
    </>
  );
};

export default Resume;
