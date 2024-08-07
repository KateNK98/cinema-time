import SeriesListItem from './serieslist-item/SeriesListItem';

import { useGetAllSeries } from '../../hooks/useSeries';
import styles from './SeriesList.module.css'

export default function SeriesList() {
    const [series] = useGetAllSeries();
    
    return(
        <div className="row mb-3">
            <div className="col-12 mt-3  text-center">
                <h2>Series</h2>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className={styles.list_view}>
                        {series.length > 0
                            ? series.map(serie => <SeriesListItem key={serie._id} {...serie} />)
                            : <h3>No series to show</h3>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}