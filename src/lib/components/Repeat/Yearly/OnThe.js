import React from 'react';
import PropTypes from 'prop-types';

import { MONTHS, DAYS } from '../../../constants/index';

const RepeatYearlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
}) => {
  const isActive = mode === 'on the';

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            aria-label="Repeat yearly on the"
            name="repeat.yearly.mode"
            checked={isActive}
            value="on the"
            onChange={handleChange}
          />
        )}
      </div>
      <div className="col-sm-1">
        na
      </div>

      <div className="col-sm-2">
        <select
          id={`${id}-which`}
          name="repeat.yearly.onThe.which"
          aria-label="Repeat yearly on the which"
          className="form-control"
          value={onThe.which}
          disabled={!isActive}
          onChange={handleChange}
        >
          <option value="First">Primeira</option>
          <option value="Second">Segunda</option>
          <option value="Third">Terceira</option>
          <option value="Fourth">Quarta</option>
          <option value="Last">Ultima</option>
        </select>
      </div>

      <div className="col-sm-3">
        <select
          id={`${id}-day`}
          name="repeat.yearly.onThe.day"
          aria-label="Repeat yearly on the day"
          className="form-control"
          value={onThe.day}
          disabled={!isActive}
          onChange={handleChange}
        >
          {DAYS.map(day => <option key={day} value={day}>{day}</option>)}
        </select>
      </div>

      <div className="col-sm-1">
        of
      </div>

      <div className="col-sm-2">
        <select
          id={`${id}-month`}
          name="repeat.yearly.onThe.month"
          aria-label="Repeat yearly on the month"
          className="form-control"
          value={onThe.month}
          disabled={!isActive}
          onChange={handleChange}
        >
          {MONTHS.map(month => <option key={month} value={month}>{month}</option>)}
        </select>
      </div>

    </div>
  );
};
RepeatYearlyOnThe.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    month: PropTypes.oneOf(MONTHS).isRequired,
    day: PropTypes.oneOf(DAYS).isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOnThe;
