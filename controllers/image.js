const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + "1deec078bbea4d55be79eedeb4caf592");

const handleApiCall = (req, res) => {
  stub.PostModelOutputs(
      {
          user_app_id: {
              "user_id": clarifai,
              "app_id": main
          },
          model_id: face-detection,
          version_id: '6dc7e46bc9124c5c8824be4822abe105',  // This is optional. Defaults to the latest model version
          inputs: [
              { data: { image: { url: req.body.input } } }
          ]
      },
      metadata,
      (err, response) => {
          if (err) {
              throw new Error(err);
          }

          if (response.status.code !== 10000) {
              throw new Error("Post model outputs failed, status: " + response.status.description);
          }

          // Since we have one input, one output will exist here.
          const output = response.outputs[0];

          console.log("Predicted concepts:");
          for (const concept of output.data.concepts) {
              console.log(concept.name + " " + concept.value);
          }
          res.json(response)
      }
  );
  // app.models
  //   .predict(
  //     {
  //       id: 'face-detection',
  //       name: 'face-detection',
  //       version: '6dc7e46bc9124c5c8824be4822abe105',
  //       type: 'visual-detector',
  //     }, req.body.input)
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0].entries);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}