import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import ReactPaginate from 'react-paginate';

import ReactECharts from '../components/ReactECharts';
import { getCurrentOption } from '../helpers/currentOption';
import { getDataOption } from '../helpers/dataOption';
import { ActiveGridContext } from '../App';
import useMediaQuery from '../components/useMediaQuery';
import { getVisualMapOption } from '../helpers/visualMapOption';
import { Countries } from '../types/countries';

import styles from './Home.module.scss';

type HomeProps = { dataRegions: Countries };
type Selected = { selected: number };

const Home = ({ dataRegions }: HomeProps) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { activeGrid } = useContext(ActiveGridContext);
  const isTablet = useMediaQuery('(max-width: 1200px)');

  useEffect(() => {
    setPageNumber(0);
  }, [activeGrid]);

  const regionsPerPage = 3;
  const pagesVisited = pageNumber * regionsPerPage;
  const pageCount = Math.ceil(Object.keys(dataRegions).length / regionsPerPage);

  const displayRegions = Object.entries(dataRegions)
    .slice(pagesVisited, pagesVisited + regionsPerPage)
    .map(([key, value]) => {
      return (
        <ReactECharts
          key={`${key}-continent`}
          option={getCurrentOption(key, getDataOption(value), getVisualMapOption(value))}
        />
      );
    });

  const changePage = (selected: Selected) => {
    setPageNumber(selected.selected);
  };

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.gridWrapper, {
          [styles.smart]: activeGrid === 2,
        })}
      >
        {(activeGrid === 1 || activeGrid === 2 || (isTablet && activeGrid === 0)) &&
          Object.entries(dataRegions).map(([key, value]) => (
            <ReactECharts
              key={`${key}-continent`}
              option={getCurrentOption(key, getDataOption(value), getVisualMapOption(value))}
            />
          ))}

        {!isTablet && activeGrid === 0 && displayRegions}
      </div>
      {!isTablet && activeGrid === 0 && (
        <div className={styles.paginate}>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginateButton}
            activeClassName={styles.active}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
