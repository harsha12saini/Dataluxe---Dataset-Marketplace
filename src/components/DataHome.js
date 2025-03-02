import React from 'react';
import './App.css';
import videoSrc from './images/dataluxe-video.mp4';
import datamart from './images/datamart-removebg-preview.png';
import Navbar from './Navbar.js';

const App = () => {
  return (
    <div>
     <Navbar />
    <div className="video-container">
    <video className="video" autoPlay muted loop>
  <source src={videoSrc} type="video/mp4" />
</video>
      <div className="overlay-text">DataLuxe - Data Marketplace</div>
    </div>
      <div className="firstdiv">
  <div className="text-content">
    <h4 className="welcome">Welcome to</h4>
    <h4 className="DataLuxe">DataLuxe Empower</h4>
    <h4 className="Journey">your DataLuxe Journey</h4>
    <p className="about">
    This project proposes a decentralized dataset marketplace that enables users to buy, sell, and utilize datasets securely using the Ethereum blockchain. The platform integrates artificial intelligence to provide dataset summaries, suggest application ideas, and automate model training, creating a seamless and innovative ecosystem for data enthusiasts, developers, and researchers. The platform also ensures data privacy, security, and fosters collaboration among users.
    </p>
  </div>
  <div className="image-container">
  <img src={datamart} alt="DataLuxe" />
    </div>
    </div>
    <div id="features" className="space">
</div>
    <div className="Features">
    <h4>DataLuxe</h4><h4>Features</h4>
    </div>
    <div className="FeatureOdd">
  <h4>Dataset Marketplace</h4>
  <div className="FeatureContent">
    <div className="FeatureofOdd">
      <p><b>Upload & Sell:</b> Users can upload datasets for sale or purchase datasets for various applications.</p>
      <p><b>Dynamic Pricing:</b> AI evaluates dataset quality and utility to suggest fair prices.</p>
      <p><b>Preview & querying:</b> Buyers can preview datasets or query insights before purchasing, ensuring they know what they’re buying.</p>
    </div>
    <img className="imageOdd" src={datamart} alt="Dataset Marketplace" />
  </div>
</div>
<div className="FeatureEven">
  <h4>AI-Powered Dataset Insights</h4>
  <div className="FeatureContent">
    <img className="imageEven" src={datamart} alt="AI-Powered Dataset Insights" />
    <div className="FeatureofEven">
      <p><b>Dataset summaries:</b> AI-generated summaries of dataset contents, helping users quickly understand the dataset.</p>
      <p><b>App idea suggestions:</b> AI suggests application ideas based on dataset characteristics and trends.</p>
    </div>
  </div>
</div>

<div className="FeatureOdd">
  <h4>Automated Model Training</h4>
  <div className="FeatureContent">
    <div className="FeatureofOdd">
      <p><b>Upload & Train:</b> Users can upload datasets and algorithms to train models automatically.</p>
      <p><b>Predefined Pipelines:</b> Provides options for fine-tuning pre-trained models (e.g., ResNet, BERT), making it easier for non-experts.</p>
    </div>
    <img className="imageOdd" src={datamart} alt="Automated Model Training" />
  </div>
</div>

<div className="FeatureEven">
  <h4>Reputation System</h4>
  <div className="FeatureContent">
    <img className="imageEven" src={datamart} alt="Reputation System" />
    <div className="FeatureofEven">
      <p><b>Decentralized Reputation:</b> A reputation score ensures trust between buyers and sellers.</p>
      <p><b>Blockchain Transparency:</b> Reviews and ratings are stored on the blockchain, ensuring transparency.</p>
    </div>
  </div>
</div>

<div className="FeatureOdd">
  <h4>Privacy-Preserving Features</h4>
  <div className="FeatureContent">
    <div className="FeatureofOdd">
      <p><b>Differential Privacy:</b> Protects sensitive data using differential privacy techniques.</p>
      <p><b>Federated Learning:</b> Enables training of models without downloading datasets, ensuring data privacy.</p>
    </div>
    <img className="imageOdd" src={datamart} alt="Privacy-Preserving Features" />
  </div>
</div>

<div className="FeatureEven">
  <h4>Collaboration & Community Features</h4>
  <div className="FeatureContent">
    <img className="imageEven" src={datamart} alt="Collaboration & Community Features" />
    <div className="FeatureofEven">
      <p><b>App Idea Marketplace:</b> Users can collaborate on app development using purchased datasets.</p>
      <p><b>Bounties & Contributions:</b> Incentivizes contributions by offering bounties for specific datasets or solutions, and rewards for high-quality datasets and constructive feedback.</p>
      <p><b>Token Rewards:</b> Users earn tokens for valuable contributions and dataset curation.</p>
    </div>
  </div>
</div>

<div className="FeatureOdd">
  <h4>Gamification</h4>
  <div className="FeatureContent">
    <div className="FeatureofOdd">
      <p><b>Achievements & Challenges:</b> Users can earn badges, complete challenges, and gain rewards to increase engagement.</p>
      <p><b>Leaderboards:</b> Displays top sellers, innovative contributors, and active users.</p>
    </div>
    <img className="imageOdd" src={datamart} alt="Gamification" />
  </div>
</div>

<div className="FeatureEven">
  <h4>Explainable AI (XAI)</h4>
  <div className="FeatureContent">
    <img className="imageEven" src={datamart} alt="Explainable AI (XAI)" />
    <div className="FeatureofEven">
      <p><b>Model Transparency:</b> Provides visual explanations of AI model outputs and training processes using tools like SHAP or LIME to ensure transparency and interpretability.</p>
    </div>
  </div>
</div>

<div className="FeatureOdd">
  <h4>Smart Licensing Contracts</h4>
  <div className="FeatureContent">
    <div className="FeatureofOdd">
      <p><b>Blockchain-based Licensing:</b> Ensures clear and enforceable licensing terms for datasets, preventing misuse or misinterpretation of dataset ownership.</p>
    </div>
    <img className="imageOdd" src={datamart} alt="Smart Licensing Contracts" />
  </div>
</div>

<div className="FeatureEven">
  <h4>Marketplace Analytics</h4>
  <div className="FeatureContent">
    <img className="imageEven" src={datamart} alt="Marketplace Analytics" />
    <div className="FeatureofEven">
      <p><b>Trends & Demand:</b> Dashboards display trends, popular datasets, and category demand, helping users make informed decisions.</p>
      <p><b>AI Recommendations:</b> The platform provides AI-driven recommendations for both buyers and sellers.</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default App;
