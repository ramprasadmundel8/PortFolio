const Projects = () => {
  return (
    <section className="py-20 px-6 bg-white" id="projects">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-xl font-semibold">Sign Language Interpreter</h3>
            <p>
              Built using CNN, BiLSTM, and MediaPipe to recognize gestures with up to 97% accuracy. Preprocessed a diverse dataset and implemented the model using PyTorch and OpenCV.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Movie Recommendation System</h3>
            <p>
              Developed using content-based filtering. Used TF-IDF for feature extraction and cosine similarity for recommendation logic. Deployed using Streamlit and Pickle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
