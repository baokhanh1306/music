import AlbumRoute from './Album';
import ArtistRoute from './Artist';
import PlaylistRoute from './Playlist';
import TrackRoute from './Track';
import UserRoute from './User';
import SeedRoute from './seed';
import GenreRoute from './genre';
import SearchRoute from './search';
import auth from '../middlewares/auth';
import { Router } from 'express';

const router = Router();

router.use('/artists', ArtistRoute);
router.use('/albums', AlbumRoute);
router.use('/playlists', PlaylistRoute);
router.use('/tracks', TrackRoute);
router.use('/users', UserRoute);
router.use('/seed', SeedRoute);
router.use('/genres', GenreRoute);
router.use('/search', SearchRoute);

export default router;