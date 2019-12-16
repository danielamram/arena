import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  CardActions,
  Typography,
  IconButton,
  Divider
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  media: {
    height: 225,
    width: 225,
    margin: 'auto',
    backgroundSize: 'auto',
    paddingTop: '56.25%' // 16:9
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, owner, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={owner.imageUrl} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.product_title}
        subheader={product.product_price}
      />
      <CardMedia
        className={classes.media}
        image={product.product_image}
        title="Paella dish"
      />
      <CardContent>
        <Typography
          align="center"
          variant="body1"
        >
          {product.product_description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <Rating name="half-rating" value={2.5} precision={0.5} />
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  owner: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
};

export default ProductCard;
