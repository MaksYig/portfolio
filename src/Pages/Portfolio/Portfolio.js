import React, { useState } from 'react';
import './Portfolio.css';
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import resumeData from '../../Components/utils/resumeData';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);
  console.log(projectDialog.image);

  return (
    <Grid container spacing={1} className='section pt_45 pb_45'>
      {/* Title */}
      <Grid item className='section_title mb_20 pt_45'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='#fff'
          className='customTabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'
            }
          />
          {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
            (tag, index) => (
              <Tab
                key={index}
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? 'customTabs_item active'
                    : 'customTabs_item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.portfolio.map((project, index) => (
            <>
              {tabValue === project.tag || tabValue == 'All' ? (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Grow in timeout={1000}>
                    <Card
                      className='customCard'
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='customCard_image'
                          image={project.image[0]}
                          title={project.title}
                          style={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                          <Typography
                            variant='body2'
                            className='customCard_title'
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            className='customCard_caption'
                            variant='body2'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={Boolean(projectDialog)}
        onClose={() => setProjectDialog(false)}
        className='projectDialog'
        // maxWidth={'lg'}
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <Carousel
          autoFocus={true}
          showThumbs={false}
          showArrows={true}
          dynamicHeight={true}
        >
          {projectDialog &&
            projectDialog.image.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  style={{
                    objectFit: 'contain',
                    maxHeight: '70vh',
                  }}
                />
              </div>
            ))}
        </Carousel>
        <DialogContent>
          <Typography className='projectDialog_description'>
            {projectDialog.description}
          </Typography>
          <DialogActions className='projectDialog_actions'>
            {projectDialog?.links?.map((link, index) => (
              <a
                href={link.link}
                target='_blank'
                key={index}
                className='projectDialog_icon'
              >
                {link.icon}
              </a>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              {projectDialog && projectDialog.date && (
                <Typography style={{ fontSize: '12px' }}>
                  {projectDialog.date}
                </Typography>
              )}
            </div>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
