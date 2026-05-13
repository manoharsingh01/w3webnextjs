import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BASE_URL, IMAGE_URL } from '@/common/api';

// Helper function to get image URL with base path
const getImageUrl = (imagePath) => {
  if (!imagePath) return '/dark/assets/imgs/blog/default.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  if (imagePath.startsWith('/')) return imagePath;
  return `${IMAGE_URL}/${imagePath}`;
};

// =============== HELPER SCRIPTS ===============
const loadBackgroudImages = () => {
  const bgImages = document.querySelectorAll('[data-background]');
  bgImages.forEach(el => {
    const bgUrl = el.getAttribute('data-background');
    if (bgUrl) {
      el.style.backgroundImage = `url(${bgUrl})`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    }
  });
};

const parallaxie = (selector, speed = 0.4) => {
  const elements = document.querySelectorAll(selector);
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    elements.forEach(el => {
      const rate = scrolled * speed;
      el.style.transform = `translateY(${rate}px)`;
    });
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// =============== COMPONENTS ===============

// Header Component
function Header({ blogData }) {
  useEffect(() => {
    parallaxie('.bg-img.parallaxie', 0.4);
    loadBackgroudImages();
  }, [blogData]);

  if (!blogData) return null;

  return (
    <header className="page-header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0"><span>{blogData.category_title || 'Uncategorized'}</span></a>
              </div>
              <h1 className="fz-55 mt-30">{blogData.title}</h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img src={blogData.author?.avatar || '/dark/assets/imgs/blog/author1.jpg'} alt="" className="circle-img" />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">{blogData.author?.name || 'Unknown Author'}</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="#0">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">{blogData.publish_date || new Date(blogData.created_at).toLocaleDateString()}</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10"></span>
                  <span className="opacity-7">{blogData.comments_count || 0} Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* thumbnail_image */}
      <div className="background bg-img parallaxie mt-80" data-background={getImageUrl(blogData.thumbnail_image || blogData.featured_image)}></div>
    </header>
  );
}

// Post Component
function Post({ blogData }) {
  useEffect(() => {
    loadBackgroudImages();
  }, [blogData]);

  if (!blogData) return null;

  // Parse description HTML safely
  const createMarkup = () => {
    return { __html: blogData.description || '<p>No content available</p>' };
  };

  return (
    <div className="container">
      <div className="main-post">
        <div className="item pb-60">
          {/* Render HTML content from description */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text" dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>

          <div className="info-area flex mt-20 pb-20">
            <div>
              <div className="tags flex">
                <div className="valign">
                  <span>Tags :</span>
                </div>
                <div>
                  {blogData.tags_display && blogData.tags_display.length > 0 ? (
                    blogData.tags_display.map((tag, idx) => (
                      <Link key={idx} href="/dark/blog-classic">{tag}</Link>
                    ))
                  ) : (
                    <span>No tags</span>
                  )}
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div className="share-icon flex">
                <div className="valign">
                  <span>Share :</span>
                </div>
                <div>
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="author-area mt-50">
            <div className="flex">
              <div className="author-img mr-30">
                <div className="img">
                  <img src={blogData.author?.avatar || '/dark/assets/imgs/blog/author1.jpg'} alt="" className="circle-img" />
                </div>
              </div>
              <div className="cont valign">
                <div className="full-width">
                  <h6 className="fw-600 mb-10">{blogData.author?.name || 'Unknown Author'}</h6>
                  <p>{blogData.author?.bio || 'No bio available'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="next-prv-post flex mt-50">
            {blogData.prev_post && (
              <div className="thumb-post bg-img" data-background={getImageUrl(blogData.prev_post.featured_image)}>
                <Link href={blogData.prev_post.link || `/blog/${blogData.prev_post.slug}`}>
                  <span className="fz-12 text-u ls1 main-color mb-15"><i className="pe-7s-angle-left"></i> Prev Post</span>
                  <h6 className="fw-600 fz-16">{blogData.prev_post.title}</h6>
                </Link>
              </div>
            )}
            {blogData.next_post && (
              <div className="thumb-post ml-auto text-right bg-img" data-background={getImageUrl(blogData.next_post.featured_image)}>
                <Link href={blogData.next_post.link || `/blog/${blogData.next_post.slug}`}>
                  <span className="fz-12 text-u ls1 main-color mb-15">Next Post <i className="pe-7s-angle-right"></i></span>
                  <h6 className="fw-600 fz-16">{blogData.next_post.title}</h6>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// RecentPosts Component
function RecentPosts({ recentPosts, publishDate }) {
  if (!recentPosts || recentPosts.length === 0) return null;

  const formatDate = (dateString) => {
    if (!dateString) return publishDate;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="recent-posts blog-list-half crev sub-bg section-padding mt-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-60">
              <h3>Recent Posts</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {recentPosts.map((post, idx) => (
            // <div className="col-lg-6 md-mb50" key={post.id || idx}>
            //   <div className="item mb-30">
            //     <div className="row rest">
            //       <div className="col-md-6">
            //         <div className="img">
            //           <img src={getImageUrl(post.featured_image)} alt={post.title} />
            //         </div>
            //       </div>
            //       <div className="col-md-6 valign">
            //         <div className="cont">
            //           <span className="date fz-12 ls1 text-u opacity-7 mb-15">{formatDate(post.created_at)}</span>
            //           <h5>
            //             <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            //           </h5>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <div className="col-lg-6 md-mb50" key={post.id || idx}>
              <div className="item mb-30">
                <div className="row rest">
                  <div className="col-md-6">
                    <div className="img">
                      <img src={getImageUrl(post.featured_image)} alt={post.title} />
                    </div>
                  </div>
                  <div className="col-md-6 valign">
                    <div className="cont">
                      <span className="date fz-12 ls1 text-u opacity-7 mb-15">{formatDate(post.created_at)}</span>
                      <h5>
                        <a href={post.link}>{post.title}</a>
                      </h5>
                      {/* <div className="tags colorbg mt-15">
                        <a href="#0" className="me-1">{post.tags_display[0]}</a>
                        <a href="#0">{post.tags_display[1]}</a>
                      </div> */}
                      <div className="tags colorbg mt-15">
                      {post.tagsDisplay && post.tagsDisplay.length > 0 ? (
                        post.tagsDisplay.map((tag, idx) => (
                          <a key={idx} href="#0" className="me-1">{tag}</a>
                        ))
                      ) : (
                        <span>No tags</span>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Comments Component
function Comments({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="comments-post section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="text mb-60">
                <h3>Comments</h3>
                <p>No comments yet. Be the first to comment!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="comments-post section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="text mb-60">
              <h3>Comments ({comments.length})</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {comments.map((comment, idx) => (
              <div className={`item-box ${idx === 1 ? 'replayed' : ''}`} key={comment.id || idx}>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="flex">
                      <div className="user-img mr-30">
                        <div className="img circle-80 line-height-1">
                          <img src={comment.avatar || '/dark/assets/imgs/blog/author1.jpg'} alt="" className="circle-img" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="line-height-1">{comment.author || 'Anonymous'}</h6>
                        <span className="fz-12 ls1 text-u mb-15">{comment.date || new Date().toLocaleDateString()}</span>
                        <p className="fz-14">{comment.comment || comment.content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center">
                    <div className="replay-post ml-auto">
                      <a href="#0">
                        <span>Reply</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// CommentsForm Component
function CommentsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Here you can implement your comment submission API call
    try {
      // Example API call
      // const response = await fetch('/api/comments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitMessage('Comment submitted successfully!');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 3000);
    } catch (error) {
      setSubmitMessage('Error submitting comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="comments-from section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="text mb-60">
              <h3>Leave a comment</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {submitMessage && (
              <div className={`alert ${submitMessage.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="messages"></div>
              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-30">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 text-center mt-20">
                  <button type="submit" className="butn-circle" disabled={isSubmitting}>
                    <span className="full-width">
                      <span className="full-width">
                        {isSubmitting ? 'Submitting...' : 'Post A Comment'}
                      </span>
                    </span>
                    <img src="/dark/assets/imgs/svg-assets/circle-star.svg" alt="" className="circle-star" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Component
function Content({ blogData }) {
  if (!blogData) return null;

  return (
    <section className="blog section-padding pb-0">
      <Post blogData={blogData} />
      <RecentPosts
        recentPosts={blogData.sidebar?.recent_posts || []}
        publishDate={blogData.publish_date}
      />
      <Comments comments={blogData.all_comments || blogData.sidebar?.comments || []} />
      <CommentsForm />
    </section>
  );
}

// =============== MAIN DETAILS COMPONENT ===============
function BlogDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!slug) return;

    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/blogs/slug/hello`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container" style={{
        textAlign: 'center',
        padding: '100px 20px'
      }}>
        <h2>Error Loading Blog Post</h2>
        <p>{error}</p>
        <Link href="/">
          <button style={{
            padding: '10px 20px',
            marginTop: '20px',
            cursor: 'pointer'
          }}>
            Go Back Home
          </button>
        </Link>
      </div>
    );
  }

  // Show not found state
  if (!blogData) {
    return (
      <div className="not-found-container" style={{
        textAlign: 'center',
        padding: '100px 20px'
      }}>
        <h2>Blog Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <button style={{
            padding: '10px 20px',
            marginTop: '20px',
            cursor: 'pointer'
          }}>
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header blogData={blogData} />
      <Content blogData={blogData} />
    </>
  );
}

export default BlogDetails;