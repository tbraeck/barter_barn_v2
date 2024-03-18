import React, { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext.js';
import { ForumContext } from './context/ForumContext.js';
import { useNavigate} from 'react-router-dom';
import Communities from './community/Communities.js';

const NewPost = () => {

  const {user} = useContext(UserContext);
  const { allGoods, allServices, allFrees, communities, setAllCommunities, setAllGoods, setAllServices, setAllFrees} = useContext(ForumContext)
  const [selectedType, setSelectedType] = useState('GOOD');
  const navigate = useNavigate();

  const [goodFormData, setGoodFormData] = useState({
    name: '',
    description: '',
    claimant_id: ''
  });

  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    description: '',
    claimant_id: '',
  });

  const [freeStuffData, setFreeStuffData] = useState({
    name: '',
    description: '',
    claimant_id: '',
  });

  const [communityData, setCommunityData] = useState({
    name: '',
    description: '',
    event_date: ''
  });

const [frees, setSomeFrees] = useState([])
const [someGoods, setSomeGoods] = useState([])
const [someServices, setSomeServices] = useState([])
const [someCommunities, setSomeCommunities] = useState([])
const [imageData, setImageData] = useState(null);

  const [errors, setErrors] = useState([]);

  const { name: goodName, description: goodDescription, claimant_id: goodClaimantId } = goodFormData
  const { name: serviceName, description: serviceDescription, claimant_id: serviceClaimantId } = serviceFormData;
  const { name: freesName, description: freesDescription, claimant_id: freesClaimantId } = freeStuffData;
  const { name: communityName, description: communityDescription, event_date: communityEventDate } = communityData;

  useEffect(() => {

      fetch(`/frees`)
        .then(res => res.json())
        .then(data => {
          console.log("Fetched frees:", data);
          setAllFrees(data);
        })
        .catch(error => console.error("Error fetching frees:", error));
   

    fetch(`/goods`)
    .then(res => res.json())
    .then(data => setSomeServices(data))

    fetch(`/services`)
    .then(res => res.json())
    .then(data => setAllServices(data))

    fetch(`/communities`)
    .then(res => res.json())
    .then(data => setSomeCommunities(data))

  }, [setAllGoods, setAllFrees, setAllCommunities, setAllServices])


  const handleGoodChange = (e) => {
    const { name, value } = e.target;
    setGoodFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setServiceFormData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handleFreeStuffChange = (e) => {
    const { name, value } = e.target;
    setFreeStuffData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handleCommunityChange = (e) => {
    const { name, value } = e.target;
    setCommunityData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handleNewGood = (newGood) => {
      setAllGoods((prevGoods) => [...prevGoods, newGood]);
      navigate('/user_profile');
    };

  const handleNewService = (newService) => {
      setAllServices((prevServices) => [...prevServices, newService]);
      navigate('/user_profile');
    };

    const handleNewFreeStuff = (newStuff) => {
      const updatedFrees = allFrees.map((oneFree) =>
        oneFree.id === newStuff.id
          ? {
              ...oneFree,
              ...newStuff,
            }
          : oneFree
      );
    
      setAllFrees(updatedFrees);
      setFreeStuffData({
        name: '',
        description: '',
        claimant_id: ''
      });
    };
    
    

    // const handleNewCommunity = (newCommunity) => {
    //   setAllCommunities((prevCommunites) => [...prevCommunites, newCommunity]);
    //   // setCommunityData({
    //   //   name: '',
    //   //   description: '',
    //   //   event_date: ''
    //   // });
    //   navigate('/user_profile');

    // };
    const handleNewCommunity = (newCommunity) => {
      const updatedCommunities = communities.map((existingCommunity) =>
        existingCommunity.id === newCommunity.id
          ? {
              ...existingCommunity,
              name: newCommunity.name,
              description: newCommunity.description,
              // Add any other properties you want to update here
            }
          : existingCommunity
      );
    
      setAllCommunities(updatedCommunities);
      setCommunityData({
        name: '',
        description: '',
        event_date: ''
      });
    };
    

  const handleSubmitGood = (e) => {
    e.preventDefault();

    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }
    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', goodName);
    formData.append('description', goodDescription);
    formData.append('claimant_id', goodClaimantId )
    formData.append('main_image', imageData);
  
    fetch(`/goods`, {
      method: 'POST',
      body: (formData),
    })

      .then((r) => {
        if (r.ok) {
          r.json().then((newGood) => {
            handleNewGood(newGood);
            navigate('/user-profile');
            alert('New good added to user profile')  

            if (newGood.errors) {
              setErrors(newGood.errors);
            }          
          });
          
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving good:', error);
        setErrors(['Error saving good']);
      });
  };

  const handleSubmitService = (e) => {
    e.preventDefault();

    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }

    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', serviceName);
    formData.append('description', serviceDescription);
    formData.append('claimant_id', serviceClaimantId )
    formData.append('main_image', imageData);
    
    fetch(`/services`, {
      method: 'POST',
      body: (formData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newService) => {
            handleNewService(newService);
            navigate('/create_post');  
            alert('New service added to user profile')  

            if (newService.errors) {
              setErrors(newService.errors);
            }
          });
          
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving service:', error);
        setErrors(['Error saving service']);
      });
  };

  const clearImageData = () => {
    setImageData(null);
  };


  const handleSubmitStuff = (e) => {
    e.preventDefault();
    
    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }

    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', freesName);
    formData.append('description', freesDescription);
    formData.append('claimant_id', freesClaimantId )
    formData.append('main_image', imageData);

    fetch(`/frees`, {
      method: 'POST',
      body: (formData), 
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newStuff) => {
            handleNewFreeStuff(newStuff);
            navigate('/create_post');  
            alert('New free stuff added to user profile')  

            if (newStuff.errors) {
              setErrors(newStuff.errors);
            }
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving stuff:', error);
        setErrors(['Error saving stuff']);
      });
  };

  const handleSubmitCommunity = (e) => {
    e.preventDefault();
    
    if (!imageData) {
      setErrors(['Please attach an image']);
      return;
    }

    const formData = new FormData();
    formData.append('user_id', user?.id || '');   
    formData.append('name', communityName);
    formData.append('description', communityDescription);
    formData.append('event_date', communityEventDate )
    formData.append('main_image', imageData);

    fetch(`/communities`, {
      method: 'POST',
      body: (formData), 
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newCommunity) => {
            handleNewCommunity(newCommunity);
            navigate('/create_post');  
            alert('New community event added to user profile')  

            if (newCommunity.errors) {
              setErrors(newCommunity.errors);
            }
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving stuff:', error);
        setErrors(['Error saving stuff']);
      });
  };


  return (
    <div className="new-post-container">
      <div className="new-post-form">
        <h1 className="new-post-h1">
          <b>NEW POST</b>
        </h1>
        <h2 className="new-post-h2">What type of post is this?</h2>
        <div className="radio-buttons">
          <label>
          <input
            type='radio'
            value='GOOD'
            name='post_type'
            checked={selectedType === 'GOOD'}
            onChange={() => setSelectedType('GOOD')}
          />
          GOOD
          </label>
          <label>
          <input
            type='radio'
            value='SERVICE'
            name='post_type'
            checked={selectedType === 'SERVICE'}
            onChange={() => setSelectedType('SERVICE')}
          />
           SERVICE
          </label>
          <label>
          <input
            type='radio'
            value='FREE STUFF'
            name='post_type'
            checked={selectedType === 'FREE STUFF'}
            onChange={() => setSelectedType('FREE STUFF')}
          />
          FREE STUFF
          </label>
          <label>
          <input
            type='radio'
            value='COMMUNITY'
            name='post_type'
            checked={selectedType === 'COMMUNITY'}
            onChange={() => setSelectedType('COMMUNITY')}
          />
          COMMUNITY
          </label>
        </div>
          
          {selectedType === 'GOOD' && (
          <form className='form' onSubmit={handleSubmitGood}> 
           <div className='form-field'>
              <label htmlFor='name'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={goodName}
                onChange={handleGoodChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={goodDescription}
                onChange={handleGoodChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div> 
            <button className='formButton' type='submit'>
              ADD
            </button>
            {errors && (
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
           </form> 
          )}
       

       {selectedType === 'SERVICE' && (
        <form className='form' onSubmit={handleSubmitService}>
            <div className='form-field'>
              <label htmlFor='title'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={serviceName}
                onChange={handleServiceChange}
                required
              /> 
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={serviceDescription}
                onChange={handleServiceChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div>
            <button className='formButton' type='submit'>
              ADD
            </button>   
            {errors &&(
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
           </form>
        )}
       
      {selectedType === 'FREE STUFF' && (
          <form className='form' onSubmit={handleSubmitStuff}>
            <div className='form-field'>
              <label htmlFor='body'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={freesName}
                onChange={handleFreeStuffChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={freesDescription}
                onChange={handleFreeStuffChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div>
            <button className='formButton' type='submit'>
              ADD
            </button>
            {errors && (
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
         </form>
      )}

      {selectedType === 'COMMUNITY' && (
        <form className='form' onSubmit={handleSubmitCommunity}>
            <div className='form-field'>
              <label htmlFor='title'>NAME:</label>
              <input
                className='formInput'
                type='text'
                name='name'
                value={communityName}
                onChange={handleCommunityChange}
                required
              />   
            </div>
            <div className='form-field'>
              <label htmlFor='description'>DESCRIPTION:</label>
              <input
                className='formInput'
                type='text'
                name='description'
                value={communityDescription}
                onChange={handleCommunityChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='event_date'>EVENT DATE:</label>
              <input
                className='formInput'
                type='date'
                name='event_date'
                value={communityEventDate}
                onChange={handleCommunityChange}
                required
              />
            </div>
            <div className="form-group">
                <label> IMAGE:</label>
                <input type="file"                  
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => setImageData(e.target.files[0])} />
                {imageData && (
                  <div>
                      <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="Preview" className='imageThumb' />
                    <button onClick={clearImageData}>Clear Image</button>
                  </div>
                )}
              </div>
            <button className='formButton' type='submit'>
              ADD
            </button>
            {errors &&(
              <div className='error-messages'>
                {errors.map((error, index) => (
                  <p key={index} className='error-message'>
                    {error}
                  </p>
                ))}
              </div>
            )}
          </form>
          )}
      </div>
    </div>
  );
};

export default NewPost;
