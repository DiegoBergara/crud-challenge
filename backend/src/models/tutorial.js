module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define('tutorial', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      trim: true
    },
    videoUrl: {
      type: Sequelize.STRING,
      trim: true
    },
    description: {
      type: Sequelize.STRING,
      trim: true
    },
    publishedStatus: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  })
  return Tutorial
}
