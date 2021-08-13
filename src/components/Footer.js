export default function Footer({totalTasks, doneTasks }) {


    return (
        <div>
            <div>
                <p>
                    {totalTasks} İş
                </p>
                <p>
                    {doneTasks} kapalı
                </p>
                <p>
                    {totalTasks - doneTasks} Açık
                </p>
            </div>
        </div>
    );
}