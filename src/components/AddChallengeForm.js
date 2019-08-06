import React, { useState } from 'react';

const AddChallengeForm = props => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [pointsGoal, setPointsLimit] = useState(0);
  const [seriesTitle, setSeriesTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');

  const submit = event => {
    event.preventDefault();
    const newChallenge = {
      name,
      startDate,
      endDate,
      releaseDate,
      deadLine,
      pointsGoal,
      seriesTitle,
      description,
      icon
    };
    props.addChallenge(newChallenge);
  };
  return (
    <section className="section columns is-centered">
      <form onSubmit={submit} className="column is-6">
        <p>
          <label htmlFor="name">Challenge name:</label>
          <input id="name" onChange={({ target }) => setName(target.value)} value={name} />
        </p>
        <p>
          <label htmlFor="startdate">Start date:</label>
          <input
            id="startdate"
            type="date"
            onChange={({ target }) => setStartDate(target.value)}
            value={startDate}
          />
        </p>
        <p>
          <label htmlFor="endDate">End date:</label>
          <input
            id="endDate"
            type="date"
            onChange={({ target }) => setEndDate(target.value)}
            value={endDate}
          />
        </p>
        <p>
          <label htmlFor="releaseDate">Release date:</label>
          <input
            id="releaseDate"
            type="date"
            onChange={({ target }) => setReleaseDate(target.value)}
            value={releaseDate}
          />
        </p>
        <p>
          <label htmlFor="deadLine">Deadline:</label>
          <input
            id="deadLine"
            type="date"
            onChange={({ target }) => setDeadLine(target.value)}
            value={deadLine}
          />
        </p>
        <p>
          <label htmlFor="pointsLimit">Points limit:</label>
          <input
            id="pointsLimit"
            type="number"
            onChange={({ target }) => setPointsLimit(target.value)}
            value={pointsGoal}
          />
        </p>
        <p>
          <label htmlFor="seriesTitle">Series title:</label>
          <input
            id="seriesTitle"
            onChange={({ target }) => setSeriesTitle(target.value)}
            value={seriesTitle}
          />
        </p>
        <p>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            onChange={({ target }) => setDescription(target.value)}
            value={description}
          />
        </p>
        <p>
          <label htmlFor="icon">FontAwesome icon:</label>
          <input id="icon" onChange={({ target }) => setIcon(target.value)} value={icon} />
        </p>
        <button type="submit">Add new challenge</button>
      </form>
    </section>
  );
};

export default AddChallengeForm;
