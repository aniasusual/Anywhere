// class ApiFeatures {
//     constructor(query, queryStr) {
//         this.query = query;
//         this.queryStr = queryStr;
//     }

//     search() {
//         const keyword = this.queryStr.keyword
//             ? {
//                 name: {
//                     $regex: this.queryStr.keyword,
//                     $options: "i",
//                 },
//             }
//             : {};

//         // console.log(keyword);
//         this.query = this.query.find({ ...keyword });
//         return this;
//     }

// }

// module.exports = ApiFeatures;

const emitEvent = (req, event, users, data) => {
    console.log("emitting event", event);
}

const deleteFilesFromCloudinary = async (public_ids) => {

}

export { emitEvent, deleteFilesFromCloudinary }

