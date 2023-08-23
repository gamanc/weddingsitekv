import { useState } from "react";
import { RSVPFormData } from "@/interfaces/RsvpTypes";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles.module.scss";
interface Props {
  guestKey: string;
  maxAdults: number;
  maxKids: number;
  onSubmit: (data: RSVPFormData) => void;
}

const MESSAGE_LENGTH_LIMIT = 300;

const RSVPForm = ({ maxAdults, maxKids, onSubmit }: Props) => {
  const [messageLength, setMessageLength] = useState(0);

  const { handleSubmit, control, watch } = useForm<RSVPFormData>({
    defaultValues: {
      willAttend: "",
      confirmedAdults: 1,
      confirmedKids: 0,
      message: "",
    },
  });

  const willAttend = watch("willAttend");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className={styles.askText}>¿Asistirás?</label>
        <div className={styles.formContainer}>
          <Controller
            name="willAttend"
            control={control}
            render={({ field }) => (
              <>
                <label className={styles.radioLabel}>
                  <input
                    className={styles.radio}
                    type="radio"
                    {...field}
                    value="yes"
                    checked={field.value === "yes"}
                  />
                  Sí
                </label>
                <label className={styles.radioLabel}>
                  <input
                    className={styles.radio}
                    type="radio"
                    {...field}
                    value="no"
                    checked={field.value === "no"}
                  />
                  No
                </label>
              </>
            )}
          />
        </div>
      </div>
      {willAttend === "yes" && (
        <>
          <div className={styles.selectsContainer}>
            <div className={styles.selectContainer}>
              <label>{maxKids === 0 ? "Asistentes:" : "Adultos:"}</label>
              <Controller
                name="confirmedAdults"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select className={styles.select} {...field}>
                    {Array.from({ length: maxAdults }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            {maxKids > 0 && (
              <div className={styles.selectContainer}>
                <label>Niños:</label>
                <Controller
                  name="confirmedKids"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select className={styles.select} {...field}>
                      {Array.from({ length: maxKids + 1 }, (_, index) => (
                        <option key={index} value={index}>
                          {index}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            )}
          </div>
        </>
      )}
      {willAttend && (
        <div className={styles.messageContainer}>
          <label>Déjanos un mensaje! (opcional):</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                maxLength={MESSAGE_LENGTH_LIMIT}
                onChange={(e) => {
                  if (e.target.value.length <= MESSAGE_LENGTH_LIMIT) {
                    field.onChange(e);
                    setMessageLength(e.target.value.length);
                  }
                }}
              />
            )}
          />
          <span>
            {messageLength}/{MESSAGE_LENGTH_LIMIT}
          </span>
        </div>
      )}
      <div>
        <div className={styles.buttonContainer}>
          <button type="submit" disabled={!willAttend}>
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default RSVPForm;
