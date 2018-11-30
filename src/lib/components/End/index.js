import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';

const End = ({
  id,
  end: {
    mode,
    after,
    onDate,
    options,
  },
  handleChange,
}) => {
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <div className="px-3">
      <div className="form-group row">
        <div className="col-sm-2 text-sm-right">
          <label
            htmlFor={id}
            className="col-form-label"
          >
            <strong>
              Termina
            </strong>
          </label>
        </div>
        <div className="col-sm-3">
          <select
            name="end.mode"
            id={id}
            className="form-control"
            value={mode}
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && <option value="Never">Never</option>}
            {isOptionAvailable('After') && <option value="After">After</option>}
            {isOptionAvailable('On date') && <option value="On date">On date</option>}
          </select>
        </div>

        {
          isOptionSelected('After') &&
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
          />
        }
        {
          isOptionSelected('On date') &&
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            handleChange={handleChange}
          />
        }

      </div>
    </div>
  );
};

End.propTypes = {
  id: PropTypes.string.isRequired,
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
