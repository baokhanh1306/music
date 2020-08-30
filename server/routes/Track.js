import express from 'express';
import { TrackController } from '../controllers/index';
const router = express.Router();

router.get('/',TrackController.getAllTracks);
router.get('/:id', TrackController.getTrackById);
router.post('/', TrackController.createTrack);
router.get('/:id/artists', TrackController.getArtistsByTrack);
router.get('/:id/album', TrackController.getAlbumByTrack);

export default router;