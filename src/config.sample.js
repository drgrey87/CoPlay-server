module.exports = {
  mongodb: {
    ip: '127.0.0.1',
    port: '27017',
    app: 'coplay'
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  },  
  crypto: {
    privateKey:
    '37LvDSasdfasfsaf3a3IEIA;3r3oi3joijpjfa3a3m4XvjYOh9Yaa.p3id#IEYDNeaken',
    tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
  },
  email: {
    test: true,    
    username: "someone@gmail.com",
    password: "somepassword",
    accountName: "Snowflake"
  },
  validation: {
    username: /^[a-zA-Z0-9]{6,12}$/,
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/
  },
  hapi: {
    port: 5000,
    ip: '192.168.1.66'
  },
  activities: [
    {
      type: 'basketball',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'football',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'tennis',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'badminton',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'ice_hockey',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'table_tennis',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'valleyball',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'american_football',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'handball',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'frisbee',
      is_active: false,
      rate: 5,
      user_id: null
    },
    {
      type: 'other',
      is_active: false,
      rate: 5,
      user_id: null
    }
  ]
};
