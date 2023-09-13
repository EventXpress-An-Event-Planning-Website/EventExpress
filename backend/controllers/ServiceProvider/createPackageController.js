import asyncHandler from 'express-async-handler'
import path from 'path'
import { venuePackage } from '../../models/createPackageModel.js'
import { otherPackage } from '../../models/createPackageModel.js'


const createpackage = asyncHandler(async(req,res)=>{

    let packages=''
    const {
        userId,
        packageBusName,
        packageTitle,
        packageAddress,
        packageContact,
        packageDescription,
        packagePrice,
        packageType,
        packageImage,
        packageOpTitle,
        packageOpDescription,
        packageOpMaxCount,
        packageOparea,
        packageOpType

    }=req.body

    const createdate = new Date();

    if (packageType==="Venue") {

        packages= await venuePackage(
            userId,
            packageBusName,
            packageTitle,
            packageAddress,
            packageContact,
            packageDescription,
            packagePrice,
            packageImage,
            createdate,
            packageOpTitle,
            packageOpDescription,
            packageOpMaxCount,
            packageOparea,
            packageOpType
        )
        if (packages) {
          res.status(201).json({
            id: packages.id
          })
        } else {
          res.status(400)
          throw new Error('Invalid user data')
        }
        
        
    } else {
        packages= await otherPackage(
            userId,
            packageBusName,
            packageTitle,
            packageAddress,
            packageContact,
            packageDescription,
            packagePrice,
            packageImage,
            createdate,
            packageType
        )
        if (packages) {
            res.status(201).json({
              id: packages.id
            })
          } else {
            res.status(400)
            throw new Error('Invalid user data')
          }

    }
    
    //console.log(packageType);
    
})

export {
    createpackage
}



