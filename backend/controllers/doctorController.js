import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req,res) => {
    const id = req.params.id
    try{
        const updateDoctor = await Doctor.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json({success:true, message: 'Doctor successfully updated', data: updateDoctor});
    }catch(e){
        res.status(500).json({success:false, message: 'Failed to update'});
        console.log(e);
    }
}

export const deleteDoctor = async(req,res) => {
    const id = req.params.id
    try{
        const deleteDoctor = await Doctor.findByIdAndDelete(id)
        res.status(200).json({success:true, message: 'Successfully deleted'});
    }catch(e){
        res.status(500).json({success:false, message: 'Failed to delete'});
        console.log(e);
    }
}

export const getSingleDoctor = async(req,res) => {
    const id = req.params.id

    try{
        const doctor = await Doctor.findById(id).select("-password")
        res.status(200).json({success:true, message: 'Doctor found', data: doctor});

    }catch(e){
        res.status(404).json({success:false, message: 'Doctor not found'});
        console.log(e);
    }
}

export const getAllDoctors = async(req,res) => {
    try{
        const doctors = await Doctor.find({}).select("-password")
        res.status(200).json({success:true, message: 'Users found', data: doctors});
    }catch(e){
        res.status(404).json({success:false, message: 'Users not found'});
        console.log(e);
    }
}