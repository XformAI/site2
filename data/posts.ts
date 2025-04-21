// data/posts.ts

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    author: string;
    image: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
    category: string;
  }
  
  const posts: BlogPost[] = [
    {
      id: 1,
      slug: "intro-to-large-language-models",
      title: "Introduction to Large Language Models (LLMs)",
      author: "Gravitones AI",
      image: "/images/llm.jpg", // make sure this image exists in /public/images
      date: "2025-04-19",
      excerpt: "Large Language Models (LLMs) have revolutionized AI by enabling machines to understand and generate human-like text.",
      category: "AI",
      tags: ["LLM", "AI", "NLP"],
      content: `
  ## What are Large Language Models (LLMs)?
  
  Large Language Models are deep learning models trained on massive text corpora. These models, like GPT-4, PaLM, and Gemini, can perform tasks such as:
  
  - Text completion
  - Summarization
  - Question answering
  - Code generation
  - Translation
  
  They rely on the Transformer architecture, first introduced by Vaswani et al. in 2017, which uses self-attention mechanisms to understand context across large sequences of text.
  
  ## Training LLMs
  
  Training an LLM typically involves:
  
  - Pretraining: Unsupervised learning on large-scale datasets like Common Crawl or The Pile.
  - Fine-tuning: Task-specific training, often supervised, using smaller but more relevant datasets.
  - Reinforcement Learning from Human Feedback (RLHF): Used in models like ChatGPT to align model responses with human preferences.
  
  LLMs require high compute (TPUs or GPUs), distributed systems, and optimized training pipelines.
  
  ## Use Cases
  
  LLMs are widely used in:
  
  - **Customer Support** (Chatbots)
  - **Medical Assistance** (HealthBots)
  - **Legal Document Analysis**
  - **Code generation** (e.g., GitHub Copilot)
  - **Content Creation** (e.g., blog, social media)
  
  ## Challenges and Limitations
  
  While powerful, LLMs have challenges:
  
  - **Bias**: They may reproduce societal biases present in training data.
  - **Hallucination**: LLMs may generate plausible but factually incorrect responses.
  - **Cost**: Training and running inference is resource-intensive.
  
  ## Future of LLMs
  
  The future includes:
  
  - Smaller, optimized models for edge devices
  - Retrieval-augmented generation (RAG)
  - Better alignment and interpretability
  - Domain-specific LLMs for healthcare, law, and education
  
  ---
  
  In conclusion, LLMs are reshaping the landscape of AI, bringing us closer to machines that can understand and interact with humans naturally.
      `.trim(),
    }
  ];
  
  export default posts;
  