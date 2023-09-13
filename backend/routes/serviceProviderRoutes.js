import express from 'express'
import { createpackage } from '../controllers/ServiceProvider/createPackageController.js'
import { 
    getSPprofile, 
    getAllPack, 
    getPacAllkDetails,
    getSPNames,
    createBlockPrefSPList
} from '../controllers/ServiceProvider/spController.js'


const router = express.Router()

router.post('/createPackage',createpackage)
router.post('/addtoBlockPrefList', createBlockPrefSPList)
router.get('/profile', getSPprofile)
router.get('/getAllPackages', getAllPack)
router.get('/getFullPackDetails', getPacAllkDetails)
router.get('/getAllSProviders', getSPNames)


export default router